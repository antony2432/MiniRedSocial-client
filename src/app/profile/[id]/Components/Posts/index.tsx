import Image from 'next/image';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
export default function Posts() {

  const ejemploApi = [{
    'id': 1, 'name': 'max', 'post': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", 'meGusta': '20' }, { 'id': 2, 'name': 'max', 'post': 'hola y chau', 'meGusta': '10' }, { 'id': 3, 'name': 'max', 'post': 'REDMI es tu pasaporte global para conocer nuevas personas y compartir experiencias. Con características de personalización únicas, oportunidades de aprendizaje y una comunidad inclusiva, READMI te permite expresar tu individualidad mientras te conectas con otros. Sumérgete en un mundo de descubrimiento, amistad y diversión. ¡Ven y únete a la aventura en READMI!', 'meGusta': '700' }, { 'id': 4, 'name': 'robert', 'post': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", 'meGusta': '20' }, { 'id': 5, 'name': 'robert', 'post': 'hola y chau', 'meGusta': '10' }, { 'id': 6, 'name': 'robert', 'post': 'REDMI es tu pasaporte global para conocer nuevas personas y compartir experiencias. Con características de personalización únicas, oportunidades de aprendizaje y una comunidad inclusiva, READMI te permite expresar tu individualidad mientras te conectas con otros. Sumérgete en un mundo de descubrimiento, amistad y diversión. ¡Ven y únete a la aventura en READMI!', 'meGusta': '700' }];


  return (
    <div > 
      
      {ejemploApi.map((api) => (

        <div key={api.id} className=' h-auto justify-center mx-auto my-10 p-2 relative box-border rounded-lg bg-white border-2 w-3/4 md:max-w-lg md:grid-cols-2 ' >


       <div className="flex flex-row ml-[10%] ">
         <Image
        src="/img/icon-perfil.jpg"
        width={40}
        height={40}
        alt="icono de perfil"
        className='mr-3 mt-3 w-10 h-10'
      />
       <h2 className="float-left my-5">{api.name}</h2>
       </div>
<div className=" flex flex-col items-center text-xs">
        <section className="flex justify-center items-center mb-5"><p className='w-4/5'>{api.post}</p></section>
          
          <div className='border-b-2 border-black flex justify-between w-4/5 items-center pb-1'>
            <h3>{api.meGusta} Me gusta</h3>
            <h3>Fecha de publicacion</h3>
          </div>
<div className='flex justify-between w-4/5 items-center'>
  <section className='flex gap-1 mt-1'><BsFillHandThumbsUpFill className='text-teal-500 '/><h3>Me gusta </h3></section>
  <h3>Comentar </h3>
</div>
</div>
        </div>


      ))}

    </div>
  );
}
