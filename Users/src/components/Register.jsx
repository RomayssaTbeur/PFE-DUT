import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register() {

   const [firstname, setFirstName] = useState("");
   const [lastname, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmpassword, setConfirmPassword] = useState("");
   const [continent, setContinent] = useState("Africa");
   const [gender, setGender] = useState("Mr");

   const navigate = useNavigate();

   const IsValidate = () => {
      let isproceed = true;
      let errormessage = 'Please enter the value in ';
      if (firstname === null || firstname === '') {
         isproceed = false;
         errormessage += 'first name ';
      }
      if (lastname === null || lastname === '') {
         isproceed = false;
         errormessage += 'last name ';
      }
      if (password === null || password === '') {
         isproceed = false;
         errormessage += ' Password ';
      }
      if (confirmpassword === null || confirmpassword === '') {
         isproceed = false;
         errormessage += 'confirm Password ';
      }else if(confirmpassword !== password){
         toast.error('Probably you made a mistake in confirm password')
      }
      if (email === null || email === '') {
         isproceed = false;
         errormessage += ' Email';
      }
      if (continent === null || continent === '') {
         isproceed = false;
         errormessage += 'continent';
      }

      if (!isproceed) {
         toast.warning(errormessage)
      } else {
         if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

         } else {
            isproceed = false;
            toast.warning('Please enter the valid email')
         }
      }
      return isproceed;
   }



   const handlesubmit = (e) => {
      e.preventDefault();
      let regobj = { firstname, lastname, password, email, continent, gender };
      //console.log(regobj);
      if (IsValidate()) {
         console.log(regobj);
         fetch("http://localhost:8000/api/signup", {
               mode: 'no-cors',
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/login');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
      }
   }
   return (
      <>

          
         <div className="min-h-screen py-40" style={{ backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)' }}>
            <div class="container mx-auto">
               <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                  <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(../images/foot.jpg)' }} >


                     <p class="text-black">Welcome to </p>
                     <div>
                        <h1 class=" text-black text-3xl mb-3"> World Cup Ticket</h1>
                     </div>

                  </div>
                  <div class="w-full lg:w-1/2 py-16 px-12">
                     <h2 class="text-3xl mb-4">Register</h2>
                     <p class="mb-4">
                        Create your account. It take only a minute
                     </p>
                     
                        <div class="mt-5">
                           <select value={gender} onChange={e => setGender(e.target.value)} className="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  >

                              <option value="Mr">Mr</option>
                              <option value="Mme">Mme</option>
                              <option value="Mlle">Mlle</option>
                           </select>
                        </div>
                       <br/>
                        <div class="grid grid-cols-2 gap-5">
                           <input type="text" placeholder="Firstname" value={firstname} onChange={e => setFirstName(e.target.value)} class="border border-gray-400 py-1 px-2 " />
                           <input type="text" placeholder="Lastname" value={lastname} onChange={e => setLastName(e.target.value)} class="border border-gray-400 py-1 px-2 " />
                        </div>

                        <div class="mt-5">
                           <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} class="border border-gray-400 py-1 px-2 w-full" />
                        </div>

                        <div class="mt-5">
                           <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} class="border border-gray-400 py-1 px-2 w-full" />
                        </div>

                        <div class="mt-5">
                           <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={e => setConfirmPassword(e.target.value)} class="border border-gray-400 py-1 px-2 w-full" />
                        </div>

                        <div class="mt-5">
                           <select value={continent} onChange={e => setContinent(e.target.value)} className="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  >

                              <option value="africa">Africa</option>
                              <option value="europe">Europe</option>
                              <option value="asia">Asia</option>
                              <option value="oceania">Oceania</option>
                              <option value="south america">South America</option>
                              <option value="north america">North America</option>
                           </select>
                        </div>



                        <div class="mt-5">
                           <button onClick={handlesubmit} class="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
                        </div>

                     
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
export default Register