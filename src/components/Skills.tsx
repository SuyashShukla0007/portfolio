import react from '../assets/Skill/react-javascript-js-framework-facebook-svgrepo-com.svg'
import next from '../assets/Skill/next-js-svgrepo-com (1).svg'
import git from '../assets/Skill/git-svgrepo-com.svg'
import firebase from '../assets/Skill/firebase-svgrepo-com.svg'
import docker from '../assets/Skill/docker-svgrepo-com.svg'
import java from '../assets/Skill/java-svgrepo-com.svg'
import javascript from '../assets/Skill/javascript-svgrepo-com.svg'
import postman from '../assets/Skill/postman-icon-svgrepo-com.svg'
import node from '../assets/Skill/nodejs-1-logo-svgrepo-com.svg'
import tailwind from '../assets/Skill/tailwind-svgrepo-com.svg'
import redux from '../assets/Skill/redux-svgrepo-com.svg'
import ts from '../assets/Skill/typescript-official-svgrepo-com.svg'
import mongo from '../assets/Skill/mongo-svgrepo-com.svg'
import Stack from './Stack'
import prisma from '../assets/Skill/prisma-svgrepo-com.svg'



export const Skills = () => {
  const skillset = [
    { name: "react", url: react },
    { name: "git", url: git },
    { name: "next", url: next },
    { name: "node", url: node },
    { name: "firebase", url: firebase },
    { name: "docker", url: docker },
    { name: "java", url: java },
    { name: "javascript", url: javascript },
    { name: "tailwind", url: tailwind },
    { name: "ts", url: ts },
    { name: "postman", url: postman },
    { name: "redux", url: redux },
    { name: "mongo", url: mongo },
    {name:'prisma',url:prisma}
  ];
  
  
  return (
    <div className='text-center mt-10'>
      <h1 className='text-4xl text-white font-sans font-semibold '>Inventory</h1>

      <div className='grid grid-cols-3 mx-2 md:gap-0 md:grid md:grid-cols-4  mx-10'>
        {skillset.map((skill,key)=>(<Stack src={skill.url} name={skill.name} key={key} />))}
      </div>

    </div>
  )
}
