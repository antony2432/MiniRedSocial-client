import Image from 'next/image';

export default function PostSend() {
  return (
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
  );
}
