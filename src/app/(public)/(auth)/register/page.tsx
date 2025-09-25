
import RegisterForm from '@/components/modules/auth/RegisterForm';

const RegisterPage = () => { 
    return (
             <div className="flex min-h-svh w-full items-center justify-center p-6 md:px-10 md:py-0">
           <div className="w-full max-w-sm">
             <RegisterForm />
           </div>
         </div>
    );
};

export default RegisterPage;