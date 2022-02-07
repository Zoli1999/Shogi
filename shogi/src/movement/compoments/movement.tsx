import React from "react";

let activePiece: HTMLElement | null = null;

export const selectPiece = (e: React.MouseEvent) => {
  const element = e.target as HTMLElement;
  if (element.classList.contains("piece")) {
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    activePiece = element;
  } else if (element.classList.contains("test")) {
    console.log(e.target);
  }
}

export const movePiece = (e: React.MouseEvent) => {
  if (activePiece) {
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    activePiece.style.position = "absolute";
    activePiece.style.left = `${x}px`;
    activePiece.style.top = `${y}px`;
  }
}

export const dropPiece = (e: React.MouseEvent) => {
  if (activePiece) {
    activePiece = null;
  }
}
