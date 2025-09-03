import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../components/Link";

export function Profile() {
  return (
    <section className='bg-base-profile rounded-[10px] flex -mt-20 relative px-10 py-8 gap-8'>
      <img src="https://avatars.githubusercontent.com/u/138946737?v=4" className='size-36 rounded-lg' />

      <div className='flex flex-col justify-between'>
        <h1 className='font-bold text-2xl text-base-title'>Matheus Correa</h1>  
        <p className='text-base-text'>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        <div className='flex gap-x-6'>
          <div className='flex items-center gap-x-2 text-base-subtitle'>
            <FontAwesomeIcon icon={faGithub} className='text-base-label' /> 
            <span>mkorrea</span>
          </div>
          <div className='flex items-center gap-x-2 text-base-subtitle'>
            <FontAwesomeIcon icon={faBuilding} className='text-base-label' /> 
            <span>Rocketseat</span>
          </div>
          <div className='flex items-center gap-x-2 text-base-subtitle'>
            <FontAwesomeIcon icon={faUserGroup} className='text-base-label' /> 
            <span>32 seguidores</span>
          </div>
        </div>

      </div>

      <Link text={"Github"} />
    </section>
  )
}