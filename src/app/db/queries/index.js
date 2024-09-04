import { bookModel } from "../../../../public/models/book-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";
import { replaceMongoIdInObject } from "@/utils/data-utils";
async function getAllBooks() {
  try {
    const allBooks = await bookModel.find().lean();
    return replaceMongoIdInArray(allBooks);
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

async function getBookById(id) {
  try {
    const book = await bookModel.findById(id).lean();
    return replaceMongoIdInObject(book);
  } catch (error) {
    console.error(`Error fetching book with id ${id}:`, error);
    throw error;
  }
}

export { getAllBooks, getBookById };
