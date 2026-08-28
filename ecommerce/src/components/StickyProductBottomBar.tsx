"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/data/productsData";
import { useCart } from "@/context/CartContext";

interface StickyProductBottomBarProps {
  product: Product;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
}

export default function StickyProductBottomBar({
  product,
  onAddToCart,
  onBuyNow,
}: StickyProductBottomBarProps) {
  const { addToCart } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past the top hero section (~480px)
      if (window.scrollY > 480) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
      .format(amount)
      .replace("INR", "Rs.");
  };

  const discountPercentage =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : null;

  const handleCartClick = () => {
    setIsAdded(true);
    addToCart(product, 1);
    if (onAddToCart) onAddToCart();
    setTimeout(() => setIsAdded(false), 1400);
  };

  return (
    <aside
      aria-label="Sticky product purchase bar"
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/80 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] py-2 sm:py-3 px-3 sm:px-8 transition-all duration-300 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-[1340px] mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Thumbnail & Title Stack */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 sm:flex-initial">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl overflow-hidden bg-[#ebe6df] flex-shrink-0 border border-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <span className="text-[9px] sm:text-[11px] font-semibold text-[#5c685f] block truncate">
              No side effects | Clinically Tested
            </span>
            <h4 className="text-[11px] sm:text-sm font-bold text-[#1b221d] leading-tight truncate">
              {product.name}
            </h4>
            <span className="text-[11px] font-bold text-[#1b221d] md:hidden block mt-0.5">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>

        {/* Middle & Right: Pricing and Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-6 flex-shrink-0">
          
          {/* Price Block (Desktop) */}
          <div className="hidden md:flex items-baseline gap-1.5">
            <span className="text-sm sm:text-base font-bold text-[#1b221d]">
              {formatPrice(product.price)}
            </span>

            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through font-normal">
                {formatPrice(product.originalPrice)}
              </span>
            )}

            {discountPercentage && (
              <span className="bg-[#2d5236] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                {discountPercentage}% off
              </span>
            )}
          </div>

          {/* Buttons: Add to Cart & Buy It Now */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            
            {/* Add to Cart (Neon Lime Pill) */}
            <button
              type="button"
              onClick={handleCartClick}
              className="bg-[#b1fc85] hover:bg-[#a0f770] text-black font-bold text-[11px] sm:text-sm px-3.5 sm:px-7 py-2 sm:py-2.5 rounded-full border border-black/80 shadow-2xs transition-all active:scale-95 whitespace-nowrap cursor-pointer"
            >
              {isAdded ? "Added ✓" : "Add to Cart"}
            </button>

            {/* Buy It Now (Black Pill) */}
            <button
              type="button"
              onClick={onBuyNow || (() => alert(`Proceeding to checkout for ${product.name}`))}
              className="bg-black hover:bg-gray-900 text-white font-bold text-[11px] sm:text-sm px-3.5 sm:px-7 py-2 sm:py-2.5 rounded-full shadow-2xs transition-all active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Buy It Now
            </button>

          </div>

        </div>

      </div>
    </aside>
  );
}
