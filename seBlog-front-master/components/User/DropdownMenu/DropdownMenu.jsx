import './_DropdownMenu.scss'
import Link from 'next/link'
const DropdownMenu = () => {
  return (
    <div className="dropdownContent">
      <Link href={'/write'}>
        <a className="dropdownDetail">글 쓰기</a>
      </Link>
      <a className="dropdownDetail">정보 수정</a>
      <a className="dropdownDetail-logOut">로그 아웃</a>
    </div>
  )
}

export default DropdownMenu
