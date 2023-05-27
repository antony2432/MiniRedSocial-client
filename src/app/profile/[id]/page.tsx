import Image from 'next/image';
import PostSend from './Components/PostSend';
import Posts from './Components/Posts';

export default function Profile() {
  return (
    <div className='dark:bg-[#18191a] h-[100%] pb-52 shadow-md ' >
      <div className='flex flex-col relative justify-center '>
        <Image
          src="/img/portada.jpg"
          width={400}
          height={128}
          alt="Foto de portada"
          className='w-screen relative xl:ml-[12.5%] xl:w-3/4 2xl:ml-[20%] 2xl:w-3/5 rounded-2xl'
        />

        <Image
          src="/img/perfil.jpg"
          width={200}
          height={150}
          alt="Foto de perfil"
          className=' relative rounded-3xl w-2/5 bg-white box-border mx-auto mt-[-90px] p-2 border-2 md:mt-[-120px] mb-10 lg:mt-[-170px] xl:w-1/3 2xl:w-1/5 '
        />
      </div>
      <div>
      </div>



      <div className=' w-screen h-8 bg-teal-800 dark:bg-[#3E4342]  pl-3 pr-3   text-white  items-center xl:w-[75vw] xl:ml-[12.5vw] 2xl:w-[60vw] 2xl:ml-[20vw]'>
        <div className='max-w-md mx-auto  flex justify-between text-center items-center' >
          <h3>23 Posts</h3>
          <h3>123 Followers</h3>
          <h3>58 Following</h3>
        </div>
      </div>


<section className='max-w-screen xl:w-[72vw] xl:ml-[14vw]'>

  <PostSend />
     <Posts/>
</section>
     
    </div>
  );
}
