from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.llms import Ollama
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
import os

class RAGAssistant:
    def __init__(self, filepath="app/data/business_info.txt"):
        # Load and split documents
        loader = TextLoader(filepath)
        docs = loader.load()
        
        splitter = CharacterTextSplitter(chunk_size=500, chunk_overlap=50)
        chunks = splitter.split_documents(docs)
        
        # Create embeddings and vector store
        embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
        
        self.db = Chroma.from_documents(
            chunks,
            embedding=embeddings,
            persist_directory="app/vector_store"  # Persist for better performance
        )
        
        # Create custom prompt for natural conversation
        prompt_template = """You are a friendly and helpful assistant representing Olya Melnic, a certified fitness trainer. 
        
Use the following information to have a natural conversation with the user. Don't just copy text - respond like a real person would in a conversation.

Context: {context}

User Question: {question}

Response (be natural, friendly, and conversational):"""
        
        PROMPT = PromptTemplate(
            template=prompt_template, 
            input_variables=["context", "question"]
        )
        
        # Initialize Ollama LLM
        llm = Ollama(
            model="gemma:2b",
            base_url=os.getenv("OLLAMA_BASE_URL", "http://ollama:11434"),
            temperature=0.7,  # Add some creativity for natural responses
            num_ctx=2048      # Context window size
        )
        
        # Create RetrievalQA chain with custom prompt
        self.qa = RetrievalQA.from_chain_type(
            llm=llm,
            chain_type="stuff",
            retriever=self.db.as_retriever(
                search_type="similarity",
                search_kwargs={"k": 3}  # Retrieve top 3 relevant chunks
            ),
            chain_type_kwargs={"prompt": PROMPT},
            return_source_documents=False  # Set to True if you want to see sources
        )
    
    def ask(self, question: str) -> str:
        try:
            result = self.qa.invoke({"query": question})
            return result["result"]
        except Exception as e:
            return f"Sorry, I encountered an error: {str(e)}"
    
    def get_relevant_context(self, question: str) -> list:
        """Optional: Get relevant documents for debugging"""
        docs = self.db.similarity_search(question, k=3)
        return [doc.page_content for doc in docs]
