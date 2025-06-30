from fastapi import APIRouter, status
from uuid import UUID

from ..database.core import DbSession
from . import model
from . import service
from ..auth.service import CurrentUser

router = APIRouter(
    prefix="/users",
    tags=["users"]
)

@router.get("/me", response_model=model.UserResponse)
def get_current_user(
    current_user: CurrentUser,
    db: DbSession
):
    return service.get_user_by_id(db, current_user.user_id)

@router.put("/change_password", status_code=status.HTTP_200_OK)
def change_password(
    password_change: model.PasswordChange,
    db: DbSession,
    current_user: CurrentUser
):
    service.change_password(db, current_user.user_id, password_change)