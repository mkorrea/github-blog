import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LinkProps {
  text: string
}

export function Link({text}: LinkProps) {
  return (
    <a href='https://github.com/mkorrea' className='absolute right-10 flex gap-x-2 text-blue font-bold text-xs uppercase hover:underline'>
      {text}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </a>
  )
}