import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRightToBracket } from "react-icons/fa6";
export default function AuthHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <button
        onClick={() => navigate(-1)}
        className="text-[var(--gold-crayola)]"
        aria-label="Go back"
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Login Link */}
      <Link to="/login" className="text-center text-[var(--gold-crayola)]">
        <FaRightToBracket size={20} />
        <span className="text-sm capitalize mt-1 font-dmsans font-bold">
          login
        </span>
      </Link>
    </div>
  );
}
