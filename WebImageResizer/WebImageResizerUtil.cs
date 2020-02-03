using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace WebImageResizer {
    public static class WebImageResizerUtil {

        public static async Task SaveByteArray(IJSRuntime js, string name, byte[] data) => await js.InvokeAsync<object>("saveByteArray", name, data);

    }
}
