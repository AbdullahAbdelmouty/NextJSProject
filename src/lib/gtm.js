export const gtmPageView = (props)=>{
    return window.dataLayer?.push({
        event:"page_view",
        url:window.location.href,
        ...props
    }
    )
}