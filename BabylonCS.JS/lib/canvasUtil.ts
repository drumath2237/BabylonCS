export const getCanvas = (id: string): HTMLCanvasElement | null => {
  return document.querySelector<HTMLCanvasElement>(`canvas#${id}`);
};

export const getCanvasWidth = (canvas: HTMLCanvasElement): number =>
  canvas.width;
export const getCanvasHeight = (canvas: HTMLCanvasElement): number =>
  canvas.height;

export const canvasModule = { getCanvas, getCanvasWidth, getCanvasHeight };
