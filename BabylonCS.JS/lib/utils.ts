/**
 * log message to p element
 * @param msg log message
 */
export const logInfo = (msg: string): void => {
  const logElm = document.querySelector<HTMLParagraphElement>("p#msg");
  if (!logElm) {
    return;
  }

  logElm.textContent = msg;
};

export const utilImpoers = { logInfo };
