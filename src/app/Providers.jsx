  import { ToastContainer, toast } from 'react-toastify';
  
 export default function Providers({children}){

    return (
      <div className='min-h-screen flex flex-col'>
        {children}
        <ToastContainer />
      </div>
    );
  }