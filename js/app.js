document.addEventListener("DOMContentLoaded", () => {
    const totalMemory = document.getElementById("memory");
    const freeMemory = document.getElementById("freeMemory");
    const usedMemory = document.getElementById("usedMemory");

    if ('deviceMemory' in navigator) {
        const deviceMemory = navigator.deviceMemory;
        
        const usedMem = deviceMemory * 0.7;
        const freeMem = deviceMemory - usedMem;

        totalMemory.textContent = `${deviceMemory}GB`;
        freeMemory.textContent = `${freeMem.toFixed(1)}GB`;
        usedMemory.textContent = `${usedMem.toFixed(1)}GB`;
    } else {
        totalMemory.textContent = "Unknown";
        freeMemory.textContent = "Unknown";
        usedMemory.textContent = "Unknown";
    }
});
