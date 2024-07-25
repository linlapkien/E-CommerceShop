'use client';

import Heading from '@/app/components/Heading';
import { product } from '../../../utils/product';
import moment from 'moment';
import { Rating } from '@mui/material';
import Avatar from '../../components/Avatar';

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div>
      {/* List of rating and comment below the product */}
      <Heading title="Product Review" />
      <br />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-300px">
                <div className="flex gap-2 items-center">
                  {/* avatar */}
                  <Avatar src={review?.user.image} />
                  <div className="text-xl font-semibold">
                    {review?.user.name}
                  </div>
                  <div className=" font-light">
                    {moment(review.createdDate).fromNow()}
                  </div>
                </div>

                <div className="mt-2">
                  <Rating value={review.rating} readOnly />
                  <div className="ml-2">{review.comment}</div>
                  <hr className="mt-4 mb-4" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRating;
