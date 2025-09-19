import { createPageTemplate, createErrorTemplate, createLayoutTemplate, createLoadingTemplate, createRouteTemplate, createTemplateTemplate, createDefaultTemplate, } from '../templates/index.js';
import { getRouteSegment } from './utils.js';
const TEMPLATE_GENERATORS = {
    page: createPageTemplate,
    layout: createLayoutTemplate,
    template: createTemplateTemplate,
    default: createDefaultTemplate,
    route: createRouteTemplate,
    loading: createLoadingTemplate,
    error: createErrorTemplate,
};
export function getBoilerplate(fileName, filePath) {
    const dirName = getRouteSegment(filePath);
    const isTypescript = fileName.endsWith('.ts') || fileName.endsWith('.tsx');
    const fileType = extractFileType(fileName);
    if (!fileType || !TEMPLATE_GENERATORS[fileType]) {
        return '';
    }
    const context = { dirName, isTypescript };
    return TEMPLATE_GENERATORS[fileType](context);
}
function extractFileType(fileName) {
    const baseName = fileName.split('.')[0] || '';
    if (Object.keys(TEMPLATE_GENERATORS).includes(baseName)) {
        return baseName;
    }
    return null;
}
//# sourceMappingURL=boilerplate.js.map