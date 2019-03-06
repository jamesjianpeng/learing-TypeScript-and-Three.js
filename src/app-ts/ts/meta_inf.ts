const metaInfo: object = {
    '/course': { /** 黑课 */
        title: '黑课',
        description: '破壳学院（www.pock.com）专注网络安全、信息安全、白帽子技术的在线学习，教育、培训的平台。致力于为网络安全、信息安全、白帽子技术爱好者提供便捷,优质的视频教程,学习社区；涵盖Web安全、漏洞分析、企业安全等权威专业视频教程',
        keywords: '黑客技术，网络安全'
    },
}

const getMetaInfo = (routerName: string, defaultMetaKey: object, otherMetaKey: object): object => {
    let result = {
        title: '',
        description: '',
        keywords: ''
    }
    result = metaInfo[routerName] ? metaInfo[routerName] : metaInfo['/activity']
    result = Object.assign(JSON.parse(JSON.stringify(result)), defaultMetaKey)
    return Object.assign({
        title: result.title,
        meta: [
            { hid: 'description', name: 'description', content: result.description },
            { hid: 'keywords', name: 'keywords', content: result.keywords }
        ]
    }, otherMetaKey)
}

export default getMetaInfo