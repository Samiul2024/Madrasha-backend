import Modal from "./Modal";

const DeleteConfirmModal = ({
  open,
  onClose,
  onConfirm,
  loading,
  title = "Delete Item",
  message = "Are you sure you want to delete this item?",
}) => {

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
    >
      <p
        className="
          text-slate-600
          leading-relaxed
          mb-6
        "
      >
        {message}
      </p>

      <div
        className="
          flex
          items-center
          justify-end
          gap-3
        "
      >
        <button
          onClick={onClose}
          className="
            px-5
            py-2.5
            rounded-xl
            border
            border-slate-300
            hover:bg-slate-100
            transition
          "
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
          disabled={loading}
          className="
            px-5
            py-2.5
            rounded-xl
            bg-red-500
            hover:bg-red-600
            text-white
            transition
          "
        >
          {loading
            ? "Deleting..."
            : "Delete"}
        </button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmModal;
