# Importar librerias
from openai import OpenAI               # ? Para conectarse a la API de OpenAI
import os                               # ? Para cargar las variables de entorno
import pathlib                          # ? Para trabajar con rutas de archivos
import textwrap                         # ? Para formatear el texto
from dotenv import load_dotenv          # ? Para cargar las variables de entorno
from IPython.display import display     # ? Para mostrar imágenes
from IPython.display import Markdown    # ? Para mostrar texto con formato Markdown
import re                               # ? Para trabajar con expresiones regulares

# Función para establecer formato MARKDOWN en la respuesta
def to_markdown(text):
  text = text.replace('•', '  *')
  return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

# Cargar la clave API desde el archivo .env
load_dotenv()
CHAT_KEY = os.getenv("OPENAI_API_KEY") # API KEY de OpenAI
ASSISTANS_KEY = os.getenv("ASSISTANT_DEV_2") # API KEY del asistente
VECTOR_KEY = os.getenv("VECTOR_KEY_2") # API KEY de la base de datos vectorial
client = OpenAI(api_key=CHAT_KEY)

# FUnción para interactuar con el asistente
thread = client.beta.threads.create() # Crear un hilo de conversación
def interactuar_con_asistente6(mensaje_usuario, thread=thread):
    try:
        # Añadir un mensaje del usuario al hilo
        message = client.beta.threads.messages.create(
            thread_id = thread.id,
            role = "user",
            content = mensaje_usuario
        )
        # Crear una respuesta del asistente
        run = client.beta.threads.runs.create_and_poll(
            thread_id=thread.id,
            assistant_id=ASSISTANS_KEY
        )

        # Enumerar los mensajes en el hilo
        if run.status == 'completed': 
            messages = client.beta.threads.messages.list(
                thread_id=thread.id
            )
            salida = messages.data[0].content[0].text.value
            return re.sub(r'【.*?】', '', salida)  # Eliminar etiquetas de formato
        else:
            return run.status
    except Exception as e:
        return f"Error al interactuar con el asistente: {str(e)}"

