import PostSend from '../profile/[id]/Components/PostSend';
import Posts from '../profile/[id]/Components/Posts';

export default function Profile() {
  return (
        <div className='flex flex-col justify-center items-center bg-teal-50 dark:bg-neutral-800'>
            <div className='grid grid-cols-2 h-20 gap-x-5 w-1/2 mb-10 text-base 2xl:flex 2xl:flex-col 2xl:absolute 2xl:top-32 2xl:left-32 2xl:w-60 2xl:h-52 2xl:space-y-4 2xl:text-2xl font-bold ' > 
            <select name="" id="" className='border-b-2 border-teal-700 text-teal-700 bg-teal-50 dark:bg-neutral-800 dark:border-white dark:text-white' >
                <option value="" hidden >Filtro 1</option>
                <option value="">opcion 1</option>
                <option value="">opcion 2</option>
                <option value="">opcion 3</option>
                <option value="">opcion 4</option>
            </select>
            <select name="" id="" className='border-b-2 border-teal-700 text-teal-700 bg-teal-50 dark:bg-neutral-800 dark:border-white dark:text-white'>
                <option value="" hidden >Filtro 2</option>
                <option value="">opcion 1</option>
                <option value="">opcion 2</option>
                <option value="">opcion 3</option>
                <option value="">opcion 4</option>
            </select>
            <select name="" id="" className='border-b-2 border-teal-700 text-teal-700 bg-teal-50 dark:bg-neutral-800 dark:border-white dark:text-white'>
                <option value="" hidden >Filtro 3</option>
                <option value="">opcion 1</option>
                <option value="">opcion 2</option>
                <option value="">opcion 3</option>
                <option value="">opcion 4</option>
            </select>
            <select name="" id="" className='border-b-2 border-teal-700 text-teal-700 bg-teal-50 dark:bg-neutral-800 dark:border-white dark:text-white'>
                <option value="" hidden>Filtro 4</option>
                <option value="">opcion 1</option>
                <option value="">opcion 2</option>
                <option value="">opcion 3</option>
                <option value="">opcion 4</option>
            </select>
            </div>



            

<div className='h-max lg:w-1/2 lg:border-teal-950 lg:border-x-2 dark:lg:border-teal-700'>
 <PostSend />
<Posts/>
</div>
 
           

        </div>
  );
}
