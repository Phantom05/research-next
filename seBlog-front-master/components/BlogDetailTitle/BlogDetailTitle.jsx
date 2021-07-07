import './BlogDetailTitle.scss'
const blogDetailTitle = ({ title, category, date, hits }) => {
  return (
    <div className="blogHeader">
      <h2 className="blogTitle" aria-label="블로그 title">
        {title}
      </h2>
      <div className="details">
        <a className="category">{category}</a>
        <span className="divider">·</span>
        <span className="date">{date}</span>
        <span className="divider">·</span>
        <span className="hits"> 조회수 {hits}</span>
      </div>
    </div>
  )
}
export default blogDetailTitle
