import './mobileTabMenu.scss';

const MobileTabMenu = ({ status }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" className={`menuUnfold${status ? " folded" : ""}`}>
        <path className="menuUnfold__arrow" strokeDashoffset="10" d="M15 2L18 5L21 2"></path>
        <path className="menuUnfold__path1" strokeDashoffset="12" d="M13 5H5"></path>
        <path className="menuUnfold__path2" strokeDashoffset="16" d="M19 10H5"></path>
        <path className="menuUnfold__path3" strokeDashoffset="16" d="M19 15H5"></path>
      </g>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" className={`menuFold${status ? " fold" : ""}`}>
        <path className="menuFold__path1"></path>
        <path className="menuFold__path2"></path>
      </g>
    </svg>
  )
}

export default MobileTabMenu