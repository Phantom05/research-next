import Link from 'next/link'

const PostLink = (props) => {
    return (
        <li>
            <Link as={`/post/${props.title}`} href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    )
}

export default PostLink