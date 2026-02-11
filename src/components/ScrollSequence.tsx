import React, { useEffect, useRef, useState } from 'react';

interface ScrollSequenceProps {
    frameCount?: number;
    className?: string;
    children?: React.ReactNode;
}

const ScrollSequence: React.FC<ScrollSequenceProps> = ({
    frameCount = 208,
    className = "",
    children
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [percent, setPercent] = useState(0);

    // ... (rest of logic) ...

    // Load images
    useEffect(() => {
        const preloadAll = () => {
            const imgs: HTMLImageElement[] = new Array(frameCount).fill(null) as any;
            const promises: Promise<void>[] = [];

            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                const paddedIndex = i.toString().padStart(3, '0');
                const src = `/scroll-frames/ezgif-frame-${paddedIndex}.jpg`;
                img.src = src;
                imgs[i - 1] = img;

                promises.push(new Promise<void>((resolve) => {
                    img.onload = () => resolve();
                    img.onerror = () => resolve(); // Continue even if error
                }));
            }

            Promise.all(promises).then(() => {
                setImages(imgs);
            });
        }

        preloadAll();
    }, [frameCount]);


    // Handle Scroll
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const { top, height } = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const scrollDistance = -top;
            const totalScrollableDistance = height - windowHeight;

            let progress = scrollDistance / totalScrollableDistance;
            progress = Math.max(0, Math.min(1, progress));

            setPercent(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Render to Canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(percent * (frameCount - 1))
        );

        const img = images[frameIndex];
        if (!img) return;

        const render = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            const { width, height } = canvas;
            const imgRatio = img.width / img.height;
            const canvasRatio = width / height;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgRatio > canvasRatio) {
                drawHeight = height;
                drawWidth = height * imgRatio;
                offsetX = (width - drawWidth) / 2;
                offsetY = 0;
            } else {
                drawWidth = width;
                drawHeight = width / imgRatio;
                offsetX = 0;
                offsetY = (height - drawHeight) / 2;
            }

            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        requestAnimationFrame(render);

    }, [percent, images, frameCount]);


    return (
        <div ref={containerRef} className="relative w-full h-[300vh]"> {/* Reduced scroll height slightly for better pacing */}
            <div className={`sticky top-0 md:top-16 w-full h-screen md:h-[calc(100vh-4rem)] overflow-hidden ${className}`}>
                {/* Scale 110% to crop out edge watermarks */}
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover block" />
                <div className="absolute inset-0 z-10">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ScrollSequence;
