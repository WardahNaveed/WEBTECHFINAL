import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux"
import { getMissionsAction } from '../../redux/slices/actions/missions.action';

export const Missions = () => {
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.missions);
    useEffect(() => {
        dispatch(getMissionsAction());
      }, [dispatch])

  return (
    <div>
    <table>
        <thead>
            <tr>
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {data.map((mission) => (
                <tr>
                    <td>{mission.mission_name}</td>
                    <td>{mission.description}</td>
                    <td><button className='bg-blue-600 text-white px-4 py-2'>Join Mission</button></td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
}
