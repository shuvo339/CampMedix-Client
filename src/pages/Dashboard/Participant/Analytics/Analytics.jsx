import { useQuery } from "@tanstack/react-query";
import DashboardTitles from "../../../../components/DashboardTitles/DashboardTitles";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Lottie from "lottie-react";
import animationData from "../../../../assets/spinner.json";
import {
    BarChart, Bar, PieChart, Pie, Tooltip, XAxis, YAxis, CartesianGrid, Legend
} from 'recharts';


const Analytics = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: camps = [], isPending: loading } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/campschart/${user?.email}`);
            return res.data;
        }
    })

    const data = camps.map(camp => ({
        ...camp,
        fees: Number(camp.fees)
    }));
    
    if(loading){
        return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
    }
    return (
        <div className="my-5">
            <DashboardTitles title={'Analytics'}></DashboardTitles>

            <div className="flex flex-col gap-6 justify-center items-center">
                {/* Bar Chart */}
                <div className="mt-10">

                    <BarChart width={800} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="campName" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="fees" fill="#8884d8" radius={10} />
                    </BarChart>
                    <h3 className="text-xl my-2 text-center">Bar Chart for Camp Fees</h3>
                </div>

                {/* Pie Chart */}
                <div className="">

                    <PieChart width={400} height={300} style={{ outline: "none" }}>
                        <Pie
                            data={data}
                            dataKey="fees"
                            nameKey="campName"
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={120}
                            labelLine={false}
                            style={{ outline: "none" }}
                            fill="#26a69a"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                    <h3 className="text-xl my-2 text-center">Pie Chart for Camp Fees</h3>
                </div>
            </div>
        </div>


    );
};

export default Analytics;