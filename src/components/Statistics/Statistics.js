import "./Statistics.css";
import { useEffect } from "react";
import { BsBank } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { getStatistics } from "../../stores/statistics";
const Statistics = () => {
  const dispatch = useDispatch();
  const { statistics } = useSelector((state) => state.statistics);
  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="stats_container">
            {statistics &&
              statistics.map((statistic) => (
                <div className="stats_item" key={statistic.id}>
                  <BsBank className="stats_icon" />
                  <h3 className="stats_count">{statistic.count}</h3>
                  <small className="stats_title">{statistic.title}</small>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
