import './toolsLayout.scss'

const ToolsLayout = ({ tools }) => {
  return (
    <div className="tools-layout">
      {tools?.map((tool, index) => {
        return (
          <span key={index} className="tools-layout__tool">{tool}</span>
        )
      })}
    </div>
  )
}

export default ToolsLayout