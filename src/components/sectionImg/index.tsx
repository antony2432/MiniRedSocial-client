import Image from 'next/image';
export default function SectionImg() {
  return (
    <>
  <div className="bg-teal-100 items-center grid grid-cols-2">
    <div className="col-span-1 gap-4">
      
        <div className="row-span-1 ">
        <h1 className='text-4xl font-semibold pt-10 w-auto h-auto text-center items-center  ' >¡Descubre, conecta, comparte!</h1>
        </div>
        <div className="row-span-1">
        <p className='m-10 text-md  text-justify w-auto h-auto text-center items-center  ' >
              Dale sabor a tu vida social con REDMI. Nuestro enfoque único en la conexión de personas te permiten compartir tus experiencias y aprender de otras. ¿Quién sabe? Podrías hacer un nuevo amigo, encontrar un nuevo paatiempo, o incluso embarcarte en una nueva aventura.¡Pruebalo hoy!</p>
        </div>
      
    </div>
    <div className="col-span-1 flex items-center justify-center">
      <div className='max-w-full '>
        <Image className='h-30 w-30 rounded-md shadow-lg' src="/img/chat.jpg" alt="Redmi" width={500} height={200}/>
      </div>
      
    </div>
</div>  

  <div className="w-full h-10 bg-teal-400 border border-teal-400"></div> 
  <div className='bg-teal-100 items-center'>
    <h1 className='text-3xl text-center pt-5 font-semibold '>¡Por qué elegirnos!</h1>
  </div>

<div className=" h-auto bg-teal-100 items-center grid grid-cols-2 pt-10 gap-4 ">
  
    <div className="max-w-full items-center ">
      <Image className='h-auto w-30 rounded-md' src="/img/work.jpg" alt="Redmi"width={500} height={200} />
    </div>       
    
    <div className="col-span-1 flex items-center justify-center">
      <div className='max-w-full '>
      <div className='flex grow flex-col  text-md w-auto text-start mr-15'>
          
          <p className='text-md '><span className='text-teal-600 text text-lg'>    Interfaz fácil de usar, navegación </span><br/>intuitiva y comunicación fluida</p>
          <br/>
          <p className='text-md'><span className='text-teal-600 text text-lg'>Oportunidades de Aprendizaje</span> <br/>descubriendo culturas,ideas y experiencias</p>
          <br/>
          <p className='text-md'><span className='text-teal-600 text text-lg'>Personalización: configura tu  </span><br/>experiencia a tu gusto y deja brillar tu personalidad única</p>
          <br/>
          <p className='text-md'><span className='text-teal-600 text text-lg'>Soporte y comunidad: una plataforma segura</span><br/> inclusiva con soporte comunitario constante</p>
          <br/>

        </div>
      </div>
      
    </div>
</div>
<div className="w-full h-20 bg-teal-400 border border-teal-400"></div> 
<div className=" h-screen bg-teal-100 items-center grid grid-cols-2 ">
    <div className="col-span-1">
      
        <div className="row-span-1 ">
        <h1 className='text-5xl font-semibold px-20 pt-40 h-auto text-center items-center  ' >¡Descubre, conecta, comparte!</h1>
        </div>
        <div className="row-span-1">
        <p className='m-10 text-2xl  text-justify w-auto h-auto text-center items-center  ' >
              Dale sabor a tu vida social con REDMI. Nuestro enfoque único en la conexión de personas te permiten compartir tus experiencias y aprender de otras. ¿Quién sabe? Podrías hacer un nuevo amigo, encontrar un nuevo paatiempo, o incluso embarcarte en una nueva aventura.¡Pruebalo hoy!</p>
        </div>
      
    </div>
    <div className="col-span-1 flex items-center justify-center">
      <div className='max-w-full '>
        <Image className='h-screen w-screen rounded-lg shadow-lg' src="/img/chat.jpg" alt="Redmi" width={500} height={300}/>
      </div>
      
    </div>
</div>  

  <div className="w-full h-20 bg-teal-400 border border-teal-400"></div> 
  <div className='bg-teal-100 items-center'>
    <h1 className='text-4xl text-center pt-10 font-semibold '>¡Por qué elegirnos!</h1>
  </div>

<div className=" bg-teal-100 items-center sm:grid grid-cols-1  md:grid grid-cols-2">
  
    <div className="max-w-full items-center pt-10">
      <Image className='' src="/work.jpg" alt="Redmi"width={500} height={300} />
    </div>      
    
    <div className="col-span-1 flex items-center justify-center">
      <div className='max-w-full '>
      <div className='flex grow flex-col  text-justify w-auto'>
          
          <p className='text-xl'><span className='text-teal-600 text text-2xl'>    Interfaz fácil de usar, navegación intuitiva y</span><br/>comunicación fluida</p>
          <br/>
          <p className='text-xl'><span className='text-teal-600 text text-2xl'>Oportunidades de Aprendizaje</span> <br/>descubriendo culturas,ideas y experiencias</p>
          <br/>
          <p className='text-xl'><span className='text-teal-600 text text-2xl'>Personalización: configura tu experiencia </span><br/>a tu gusto y deja brillar tu personalidad única</p>
          <br/>
          <p className='text-xl'><span className='text-teal-600 text text-2xl'>Soporte y comunidad: una plataforma segura</span><br/> inclusiva con soporte comunitario constante</p>
          <br/>

        </div>
      </div>
      
    </div>
</div>

    {/* <div className="bg-teal-100 flex w-full h-screen items-center">
        <div className="flex flex-col  justify-center w-1/2">
            <h1 className='text-4xl  pl-20 pt-40'>REDMI: ¡Descubre, conecta, comparte!</h1>
            <p className='m-20 text-xl text-alingn-justify' >
              Dale sabor a tu vida social con REDMI. Nuestro enfoque único en la conexión de personas te permiten compartir tus experiencias y aprender de otras. ¿Quién sabe? Podrías hacer un nuevo amigo, encontrar un nuevo paatiempo, o incluso embarcarte en una nueva aventura.¡Pruebalo hoy!</p>
        </div>
            
            <div className='justify-center'>
                <Image className='w-full h-full items-center ' src="/img/im2.avif" alt="Redmi" width={500} height={500}/>
            </div> 
        
    </div>
    <div className="w-full h-20 bg-teal-400 border border-teal-400"></div> 
    <div className="bg-teal-100 pb-20">
            <h1 className='text-4xl text-center p-10 pb-10'>Por qué elegirnos</h1>
            <div className='flex justify-center gap-20 p-10' >
              <div className='sm:w-1/2 md:w-full'>
                <Image className='h-full ml-10' src="/img/img4.png" alt="Redmi"width={500} height={350} />
          
              </div>  
              <div className='justify-start mr-10 text-align-center'>
          
                <p className='text-xl'><span className='text-teal-600 text text-2xl'>    Interfaz fácil de usar, navegación intuitiva y</span><br/>comunicación fluida</p>
                <br/>
                <p className='text-xl'><span className='text-teal-600 text text-2xl'>Oportunidades de Aprendizaje</span> <br/>descubriendo culturas,ideas y experiencias</p>
                <br/>
                <p className='text-xl'><span className='text-teal-600 text text-2xl'>Personalización: configura tu experiencia </span><br/>a tu gusto y deja brillar tu personalidad única</p>
                <br/>
                <p className='text-xl'><span className='text-teal-600 text text-2xl'>Soporte y comunidad: una plataforma segura</span><br/> inclusiva con soporte comunitario constante</p>
                <br/>

              </div>
            </div>
          
    </div>
     */}
    </>
  );
}