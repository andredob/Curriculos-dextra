import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})




export class ProfilesPage implements OnInit {
 dataJson = [
    {
      email: 'emmanuelframos@gmail.com',
      id: '59793e59dbb2ee0e409c1aab',
      name: 'Emmanuel Ramos',
      experience: 'Atua como Engenheira de software na CI&T',
      photo: ''
    },
     {
      email: 'goj1@hotmail.com',
      id: '5979450f10264113219af674',
      name: 'Hugo Sousa',
      experience: 'Atua como Desenvolvedor Java Pleno | Desenvolvedor FullStack na empresa Basis',
      photo: ''
    },
     {
      email: 'gennerdiego@gmail.com',
      id: '5979f2f9cddc940e4db7151b',
      name: 'Genner Diego Costa Almeida',
      experience: 'Atua como Especialista Java na empresa Everis Brasil',
      photo: ''
    },
    {
      email: 'marcelo.iron09@gmail.com',
      id: '597a95d913bda3331e6025bc',
      name: 'Marcelo dos Santos Silva',
      experience: 'Atua como Desenvolvedor backend Pleno na empresa B2w (é uma grande empresa)',
      photo: ''
    },
    {
      email: 'orsiberton@gmail.com',
      id: '597a9be2004e897ceb463796',
      name: 'Bruno Orsi Berton',
      experience: 'Atua como Software Developer na empresa CI&T',
      photo: ''
    },
    {
      email: 'ever.lex.cabrera@gmail.com',
      id: '597a9d6f344a2d6c7f410e0b',
      name: 'Ever Cabrera Rivarola',
      experience: 'Atua como Java Software Developer na empresa Softvaro Consultoria',
      photo: ''
    },
    {
      email: 'alexander.reis@gmail.com',
      id: '597a9b8613bda3331e602962',
      name: 'Alexander Reis',
      experience: 'Atua como Java Architect na empresa Spread Tecnologia',
      photo: ''
    },
    {
      email: 'contato.raphaelinacio@gmail.com',
      id: '597a9c8713bda3331e6029e6',
      name: 'Raphael Inacio da Silva',
      experience: 'Atua como Analista de Java na empresa Resource IT Solutions',
      photo: ''
    },
    {
      email: 'leokaos@gmail.com',
      id: '597a9f8c004e897ceb463b18',
      name: 'Leonardo Alejandro Guerra Otero',
      experience: 'Atua como Analista de Java na empresa Resource IT Solutions',
      photo: ''
    },
    {
      email: 'ggamaral@gmail.com',
      id: '597aa0a688e43b6c85f06474',
      name: 'Guilherme Gentil do Amaral',
      experience: 'Atua como Analista de Sistemas Junior na empresa Ideale Projetos e Soluções',
      photo: ''
    },
    {
      email: 'gsstrozi@gmail.com',
      id: '597aa734344a2d6c7f4112f3',
      name: 'Gabriel Strozi Schneider',
      experience: 'Atua como Desenvolvedor Pleno na empresa Luxfacta Soluções de TI',
      photo: ''
    },
    {
      email: 'renatorodriguesnet@gmail.com',
      id: '597b2cfe46ffec2c5f08bba8',
      name: 'RENATO RODRIGUES',
      experience: 'Atua como Analista de TI Pleno (desenvolvedor) na empresa PST Electronics',
      photo: ''
    },
    {
      email: 'jailsonalve@gmail.com',
      id: '597b775ffb1cf25951f89449',
      name: 'JAILSON ALVES',
      experience: 'Atua como Servidor de aplicação WildFly na empresa Qui!-Group',
      photo: ''
    },
    {
      email: 'macrusal@gmail.com',
      id: '59809f94ff6caf102d7aea78',
      name: 'Marcelo da Cruz Salvador',
      experience: 'Atua como Freelancer - Desenvolvedor Mobile iOS na empresa Digital SA',
      photo: ''
    },
    {
      email: 'ebandeira@gmail.com',
      id: '5984871a898e9779363f7171',
      name: 'EDUARDO DA SILVA BANDEIRA',
      experience: 'Atua como Desenvolvedor Sr na empresa Samsung',
      photo: ''
    },
    {
      email: 'pelichero_13@hotmail.com',
      id: '598a06311820556ccfabf3f8',
      name: 'Felipe Pelichero',
      experience: 'Atua como JAVA Developer na empresa JAX-WS, Apache, Tomcat, Spring',
      photo: ''
    },
    {
      email: 'silviocesarmendes@gmail.com',
      id: '598aefdd6ac41c48324ca7fb',
      name: 'SILVIO CESAR MENDES',
      experience: 'Atua como Líder de projetos na empresa Brinks Global Payments',
      photo: ''
    },
    {
      email: 'wesley.sangalli@yahoo.com.br',
      id: '5995ce95e69bc616951e2590',
      name: 'Wesley Sangalli',
      experience: 'Atua como Analista de Sistemas Trainee na empresa HST',
      photo: ''
    },
    {
      email: 'koiti.silva@gmail.com',
      id: '598062a607730425da7894fa',
      name: 'Matheus Koiti Koyama da Silva',
      experience: 'Atua como Estagiário na área de segurança de software na empresa SIDI- Samsung',
      photo: ''
    },
    {
      email: 'giampaoli2011@gmail.com',
      id: '5a0f7c4f43b8055c6b76a1ac',
      name: 'Felipe Giampaoli',
      experience: 'Atua como Front end Developer na empresa CPqD',
      photo: ''
    },
    {
      email: 'rzeuli@gmail.com',
      id: '5a9e6ceaed1a41544921fce4',
      name: 'Ricardo Zeuli da Silva',
      experience: 'Atua como Engenheiro de Software Júnior na empresa GFT Brasil',
      photo: ''
    },
    {
      email: 'frkey@outlook.com',
      id: '5aba71e6d0c1972e56a66426',
      name: 'Felipe Rodrigues de Carvalho',
      experience: 'Atua como Programador Pleno na empresa SEMEQ - Serviços de Monitoramento',
      photo: 'https://prod-applicant-files.s3.amazonaws.com/applicant_profilezjYtguUC/teste1522168040793.jpg'
    },
    {
      email: 'leandro.francischinelli@gmail.com',
      id: '5ac6daf7e1e36e1f5c376257',
      name: 'Marcos Leandro Francischinelli',
      experience: 'Atua como Software Engineer na empresa CI&T',
      photo: ''
    },
    {
      email: 'vitorghis@gmail.com',
      id: '5ad5ef495c29d511fb7e6cd0',
      name: 'Vitor Ghiraldelli Silva',
      experience: 'Atua como Engenheiro de Software Pleno na empresa CI&T',
      photo: ''
    },
    {
      email: 'guilherme250493@hotmail.com',
      id: '5adf23e408a8ad7b07cace88',
      name: 'Guilherme Augusto Moreira Baldissera',
      experience: 'Atua como Desenvolvedor Java na empresa INDRA',
      photo: ''
    },
    {
      email: 'neomartins@gmail.com',
      id: '5afc413d661fa91478c8ae3d',
      name: 'Gustavo Martins',
      experience: '',
      photo: ''
    },
    {
      email: 'mrbazani@gmail.com',
      id: '5b2035e202795045e28d7b1a',
      name: 'Mateus Bazani',
      experience: 'Atua como Freelancer na empresa Desenvolvedor Fullstack',
      photo: ''
    },
    {
      email: 'hernando.sas@gmail.com',
      id: '5b27a290f6314262eba8787b',
      name: 'Hernando de Sá Silva',
      experience: 'Atua como Backend Engineer na empresa K.I.S Solutions',
      photo: ''
    },
    {
      email: 'denisgariglio@gmail.com',
      id: '5b2c3c5b29e8a828cd817f30',
      name: 'Denis Gariglio',
      experience: 'Atua como Engenheiro de Software na empresa CI&T',
      photo: ''
    },
    {
      email: 'diego.fcandido1996@gmail.com',
      id: '5b396ef24808e57622345ed4',
      name: 'Diego Fortunato Candido',
      experience: 'Atua como Desenvolvedor Web ll na empresa Buildbox IT Solutions',
      photo: ''
    },
    {
      email: 'rabico@gmail.com',
      id: '',
      name: 'Rabicó',
      experience: 'Atua como gato na empresa Autonomo Contratem ela!!',
      photo: '../../assets/rabico.jpeg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
