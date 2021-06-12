# Block-front project 

## Folders

O projeto é dividido em três grandes grupos.

##### Componentes

São as menores partes do projeto, como botões ou inputs. Preferencialmente não devem
conter regra de negócio ou realizar chamadas externas. Devem ser desenvolvidos de forma 
a possibilitarem a reutilização em qualquer outro ponto do sistema. 

##### Páginas 

Devem agrupar os componentes e tratar da comunicação com os serviços e regras de negócio.

##### Serviços
	
 Devem conter as regras de negócio do sistema e processamento externos as páginas, como chamadas a API's cálculos ou outro tipo de processamento especifico.  
