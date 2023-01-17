import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(({ id, label, percentage }) => (
    <li key={id} class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  ));

  return (
    <>
      <section class="statistics">
        {title && <h2 class="title">{title}</h2>}
        {elements}
        <ul class="stat-list"></ul>
      </section>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
