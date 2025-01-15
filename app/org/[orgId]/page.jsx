const Dashboard = async ({params}) => {
    const {id} = await params
    return ( 
        <div> Organization {id} Dashboard</div>
     );
}
 
export default Dashboard;