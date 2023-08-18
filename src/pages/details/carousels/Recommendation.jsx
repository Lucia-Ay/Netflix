import PropTypes from 'prop-types';

import Carousel from '../../../components/carousel/Carousel';
import useFetch from '../../../hooks/useFetch';

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    <Carousel
      title="Recommendations"
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

Recommendation.propTypes = {
  mediaType: PropTypes.node,
  id: PropTypes.node,
};

export default Recommendation;
