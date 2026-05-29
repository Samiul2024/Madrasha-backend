import {
  motion,
  AnimatePresence,
} from "framer-motion";

const Modal = ({
  open,
  onClose,
  title,
  children,
}) => {

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={onClose}
            className="
              fixed
              inset-0
              bg-black/50
              z-50
              backdrop-blur-sm
            "
          />

          {/* MODAL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-[60]
              w-[95%]
              max-w-lg
              -translate-x-1/2
              -translate-y-1/2
              rounded-3xl
              bg-white
              shadow-2xl
              p-6
            "
          >
            {/* HEADER */}
            <div
              className="
                mb-5
                flex
                items-center
                justify-between
              "
            >
              <h2
                className="
                  text-xl
                  font-bold
                  text-slate-900
                "
              >
                {title}
              </h2>

              <button
                onClick={onClose}
                className="
                  text-slate-500
                  hover:text-red-500
                  transition
                  text-xl
                "
              >
                ?
              </button>
            </div>

            {/* CONTENT */}
            <div>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
