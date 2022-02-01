<a name="module_ToolProvider"></a>

## ToolProvider
Provides an object to send LTI Iframe communication messages to an LTI tool consumer

**Author**: Renaat De Muynck <renaat.demuynck@arteveldehs.be>  
**License**: MIT  

* [ToolProvider](#module_ToolProvider)
    * [.frameResize(height)](#module_ToolProvider.frameResize)
    * [.showModuleNavigation()](#module_ToolProvider.showModuleNavigation)
    * [.hideModuleNavigation()](#module_ToolProvider.hideModuleNavigation)
    * [.scrollToTop()](#module_ToolProvider.scrollToTop)
    * [.navigateHome()](#module_ToolProvider.navigateHome)
    * [.navigateNext()](#module_ToolProvider.navigateNext)
    * [.navigatePrevious()](#module_ToolProvider.navigatePrevious)
    * [.setUnloadMessage(message)](#module_ToolProvider.setUnloadMessage)
    * [.removeUnloadMessage(message)](#module_ToolProvider.removeUnloadMessage)
    * [.screenReaderAlert(body)](#module_ToolProvider.screenReaderAlert)
    * [.pageRefresh()](#module_ToolProvider.pageRefresh)

<a name="module_ToolProvider.frameResize"></a>

### ToolProvider.frameResize(height)
Tell the tool consumer to resize the iframe.

**Kind**: static method of [<code>ToolProvider</code>](#module_ToolProvider)  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | The height to set the iframe to |

<a name="module_ToolProvider.showModuleNavigation"></a>

### ToolProvider.showModuleNavigation()
Tell the tool consumer to show the module navigation.

**Kind**: static method of [<code>ToolProvider</code>](#module_ToolProvider)  
<a name="module_ToolProvider.hideModuleNavigation"></a>

### ToolProvider.hideModuleNavigation()
Tell the tool consumer to hide the module navigation.

**Kind**: static method of [<code>ToolProvider</code>](#module_ToolProvider)  
<a name="module_ToolProvider.scrollToTop"></a>

### ToolProvider.scrollToTop()
Tell the tool consumer to scroll to top.

**Kind**: static method of [<code>ToolProvider</code>](#module_ToolProvider)  
<a name="module_ToolProvider.navigateHome"></a>

### ToolProvider.navigateHome()
Tell the tool consumer to navigate home

**Kind**: static method of [<code>ToolProvider</code>](#module_ToolProvider)  
<a name="module_ToolProvider.navigateNext"></a>

### ToolProvider.navigateNext()
Tell the tool consumer to navigate to the next item

**Kind**: static method of [<code>ToolProvider</code>](#module_ToolProvider)  
<a name="module_ToolProvider.navigatePrevious"></a>

### ToolProvider.navigatePrevious()
Tell the tool consumer to navigate to the previous item

**Kind**: static method of [<code>ToolProvider</code>](#module_ToolProvider)  
<a name="module_ToolProvider.setUnloadMessage"></a>

### ToolProvider.setUnloadMessage(message)
Tell the tool consumer to show a message before navigating away

**Kind**: static method of [<code>ToolProvider</code>](#module_ToolProvider)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | The message to send |

<a name="module_ToolProvider.removeUnloadMessage"></a>

### ToolProvider.removeUnloadMessage(message)
Tell the tool consumer to remove the unload message

**Kind**: static method of [<code>ToolProvider</code>](#module_ToolProvider)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | The message to send |

<a name="module_ToolProvider.screenReaderAlert"></a>

### ToolProvider.screenReaderAlert(body)
Tell the tool consumer to send a message to the screen reader

**Kind**: static method of [<code>ToolProvider</code>](#module_ToolProvider)  

| Param | Type | Description |
| --- | --- | --- |
| body | <code>string</code> | The message body to send |

<a name="module_ToolProvider.pageRefresh"></a>

### ToolProvider.pageRefresh()
Tell the tool consumer to reload the iframe

**Kind**: static method of [<code>ToolProvider</code>](#module_ToolProvider)  
