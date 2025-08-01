import pytest
from uuid import uuid4
from app.users import service as users_service
from app.users.model import PasswordChange
from app.exceptions import UserNotFoundError, InvalidPasswordError, PasswordMismatchError
from app.auth import service as auth_service
from app.entities.user import User

def test_get_user_by_id(db_session, test_user):
    db_session.add(test_user)
    db_session.commit()

    user = users_service.get_user_by_id(db_session, test_user.id)
    assert user.id == test_user.id
    assert user.email == test_user.email

    with pytest.raises(UserNotFoundError):
        users_service.get_user_by_id(db_session, uuid4())

def test_change_password(db_session, test_user):
    # Add the user to the database
    db_session.add(test_user)
    db_session.commit()
    
    # Test successful password change
    password_change = PasswordChange(
        current_password="password123",   
        new_password="newpassword123",
        new_password_confirm="newpassword123"
    )
    
    users_service.change_password(db_session, test_user.id, password_change)
    
    updated_user = db_session.query(User).filter_by(id=test_user.id).first()
    assert auth_service.verify_password("newpassword123", updated_user.password_hash)
    
def test_change_password_invalid_current(db_session, test_user):
    db_session.add(test_user)
    db_session.commit()
    
    # Test invalid current password
    with pytest.raises(InvalidPasswordError):
        password_change = PasswordChange(
            current_password="wrongpassword",
            new_password="newpassword123",
            new_password_confirm="newpassword123"
        )
        users_service.change_password(db_session, test_user.id, password_change)
        
def test_change_password_mismatch(db_session, test_user):
    db_session.add(test_user)
    db_session.commit()
    
    # Test password mismatch
    with pytest.raises(PasswordMismatchError):
        password_change = PasswordChange(
            current_password="password123",
            new_password="newpassword123",
            new_password_confirm="differentpassword"
        )
        users_service.change_password(db_session, test_user.id, password_change)