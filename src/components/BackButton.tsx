import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

interface BackButtonProps {
    className?: string;
    style?: React.CSSProperties;
}

const BackButton: React.FC<BackButtonProps> = ({ className, style }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className={`btn-back-global ${className || ''}`}
            style={{
                position: 'fixed', // Fixed to stay visible
                top: '90px',      // Below navbar (approx 64px + spacing)
                left: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(0, 0, 0, 0.5)', // Darker background for contrast
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '10px 20px',
                borderRadius: '30px', // Pill shape
                fontSize: '0.95rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                zIndex: 100,
                backdropFilter: 'blur(10px)',
                ...style
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateX(-3px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
        >
            <FaArrowLeft /> Back
        </button>
    );
};

export default BackButton;
