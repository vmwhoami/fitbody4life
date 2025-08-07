from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.llms import Ollama
from langchain.chains import RetrievalQA
import os

class RAGAssistant:
    def __init__(self, filepath="app/data/business_info.txt"):
        loader = TextLoader(filepath)
        docs = loader.load()
        
        splitter = CharacterTextSplitter(chunk_size=500, chunk_overlap=50)
        chunks = splitter.split_documents(docs)
        
        embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
        
        self.db = Chroma.from_documents(
            chunks,
            embedding=embeddings,
            # persist_directory="app/vector_store"  # Optional
        )
        
        self.qa = RetrievalQA.from_chain_type(
            llm=Ollama(
                model="tinyllama:latest",
                base_url=os.getenv("OLLAMA_BASE_URL", "http://ollama:11434")
            ),
            retriever=self.db.as_retriever()
        )
    
    def ask(self, question: str) -> str:
        # Fixed: Replace .run() with .invoke()
        result = self.qa.invoke({"query": question})
        return result["result"]