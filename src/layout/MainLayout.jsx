/* eslint-disable react/prop-types */
import SideBar from "../components/SideBar"

const MainLayout = ( { children }) => {
  return (
    <div>
      <SideBar />
        { children }

    </div>
  )
}

export default MainLayout
