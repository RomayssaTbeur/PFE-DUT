import React from 'react';
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

function PaymentPieChart() {

    const data = [
        { name: 'credit card', value: 400 },
        { name: 'PayPal', value: 200 },
        { name: 'Cash payment via ', value: 100 },

    ]

    const COLORS = ['#66b2b2', '#008080', '#006666', '#004c4c'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx="35%"
                        cy="30%"
                        outerRadius={80}
                        fill="#8884d8"
                        label={renderCustomizedLabel}
                        labelLine={false}
                    />
                    <Pie dataKey="value" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#66b2b2" />
                    <Tooltip />
                </PieChart>
            
        </>
    )
}
export default PaymentPieChart