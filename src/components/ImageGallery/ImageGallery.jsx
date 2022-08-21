import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { Box } from 'components/Box';
import getImages from 'services/API';

export default function ImageGallery({ request, page, loadMore }) {
  const [hits, setHits] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalURL, setModalURL] = useState('');

  useEffect(() => {
    if (!request) {
      return;
    }

    setLoader(true);

    getImages(request, page)
      .then(data => {
        const { hits, totalHits, total } = data;

        if (total === 0) {
          toast.error('The search has not given any results');
          return;
        }

        if (page === 1) {
          setHits(hits);
          setTotalPage(Math.ceil(totalHits / 12));
        } else {
          setHits(prev => [...prev, ...hits]);
        }
      })
      .finally(() => setLoader(false));
    // }
  }, [page, request]);

  const toggleModal = modalURL => {
    if (modalURL) {
      setModalURL(modalURL);
    }
    setShowModal(prev => !prev);
  };

  return (
    <>
      <div>
        <Box
          as="ul"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gridGap={4}
          mb={4}
        >
          {hits.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onToggleModal={toggleModal}
              getModalURL={setModalURL}
            />
          ))}
        </Box>
      </div>
      {loader && <Loader />}
      {totalPage > 1 && totalPage !== page && <Button loadMore={loadMore} />}
      {showModal && <Modal url={modalURL} onToggleModal={toggleModal} />}
    </>
  );
}

ImageGallery.propTypes = {
  request: PropTypes.string.isRequired,
  loadMore: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
