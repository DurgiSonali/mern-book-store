import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={book._id}
      className="border-2 border-pink-800 rounded-lg px-4 py-2 m-2"
    >
      <h2 className="flex w-fit px-7 py-1 bg-red-300 rounded-lg">{book.publishYear}</h2>
      <h4 className="my-6 text-gray-800">{book._id}</h4>
      <div className="flex justify-start item-center gap-x-4">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start item-center gap-x-4">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2
          className="
              my-1"
        >
          {book.auther}
        </h2>
      </div>
      <div className="flex  justify-start item-center gap-x-6">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BiInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-800 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-800 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
