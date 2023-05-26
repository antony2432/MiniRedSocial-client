import Image from 'next/image';

export default function Profile() {
  return (
    <div>
      <div className='flex-col relative justify-center'>
        <Image
          src="/img/portada.jpg"
          width={400}
          height={128}
          alt="Foto de portada"
          className=' w-screen'
        />

        <Image
          src="/img/perfil.jpg"
          width={200}
          height={150}
          alt="Foto de perfil"
          className=' relative rounded-3xl w-2/5 bg-white box-border mx-auto mt-[-90px] p-2 border-2 md:mt-[-120px] mb-10 lg:mt-[-170px] '
        />
      </div>
      <div>


      </div>



      <div className=' w-screen h-8 bg-teal-800   pl-3 pr-3   text-white  items-center'>
        <div className='max-w-md mx-auto  flex justify-between text-center items-center' >
          <h3>23 Posts</h3>
          <h3>123 Followers</h3>
          <h3>58 Following</h3>
        </div>
      </div>



      <div className='grid grid-cols-1 justify-center mx-auto my-10 p-2 relative box-border rounded-lg bg-white border-2 w-3/4 md:max-w-lg md:grid-cols-2 md:h-28'>
      <Image
          src="/img/icon-perfil.jpg"
          width={40}
          height={40}
          alt="icono de perfil"
          className='mx-auto mb-3 md:mx-0'
        />
        <input type="text" placeholder='En que estas pensando......' className='rounded-md p-2 h-12 bg-teal-100 md: max-w-lg md:ml-[-70%]' />

         <button className='bg-teal-800 w-70 mt-3 text-white rounded-lg md:w-40 md:absolute md:right-2 md:bottom-3 '>Publicar</button>
      </div>
     
    </div>
  );
}
