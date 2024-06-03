// menu active check
export const checkActive = (compare: string, check: string) => {
  return compare === check;
}

// search enter key
export const handleKeyDownEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const targetInput = event.target as HTMLInputElement;

  if (event.key === 'Enter' && targetInput.value.trim().length > 0) {
    event.preventDefault(); // 기본 Enter 동작 방지

    // 부모 요소에서 `button.submit`을 찾음
    const parent = targetInput.parentElement;
    if (parent) {
      const submitButton = parent.querySelector<HTMLButtonElement>('button.submit');
      if (targetInput.value.trim()) {
        submitButton?.click();
      }
    }
  }
}

// submit button click > input vlaue check
export const handleSubitCheckSearchValue = (event: React.MouseEvent<HTMLButtonElement>) => {
  const targetButton = event.target as HTMLButtonElement;
  const parent = targetButton.parentElement;
  if (parent) {
    const inputEl = parent.querySelector<HTMLInputElement>('input.searchText');
    if (inputEl && inputEl.value.trim().length > 0) {
      inputEl.form?.submit();
    }
  }
}