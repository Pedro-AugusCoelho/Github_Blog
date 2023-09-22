
import Dotenv from 'dotenv-webpack'

export default {
  
  plugins: [
    // Adiciona as variáveis de ambiente ao processo de build
    new Dotenv()
  ]
};