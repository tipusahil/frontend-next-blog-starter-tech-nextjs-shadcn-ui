import { getUserSession } from "@/helpers/getUserSession";

const DashboardHomePage = async () => {

  // const session =await getServerSession(authOptions);
  const session =await getUserSession();
  // console.log("dashboard page theke : session: ",session);


  return (
    <div  className="min-h-screen flex flex-col justify-center items-center bg-gray-50  w-full">
      <h1 className="text-4xl font-bold"> Hi, {session?.user?.name} Welcome Next-Blog App</h1>
      <h1 className="text-4xl font-bold"> here is your email address : {session?.user?.email} </h1>
      {/* <Image src={session?.user?.name || "logo.png"} alt="s" width={500} height={500} /> */}
      <img src={session?.user?.name || "logo.png"} alt="x" />
    </div>
  );
};

export default DashboardHomePage;
